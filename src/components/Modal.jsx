import { useEffect, useState } from "react";
import FormRowMultiSelect from "../components/FormRowMultiSelect";
import FormRow from "./FormRow";
import axios from "axios";
import { formatData } from "../utils/formatData";

const Modal = ({ toggleModal, onSubmit, config, defaultValue }) => {
  const [options, setOptions] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      setIsLoading(true);
      try {
        // Fetch data for fields with individual endpoints
        const fetchPromises = config.fields.map(async (field) => {
          if (field.type === "select" && field.optionsEndpoint) {
            const { data } = await axios.get(field.optionsEndpoint);
            return {
              [field.name]: formatData(data[field.dataPath]),
            };
          }

          if (field.isStatic) {
            return {
              [field.name]: formatData(field.options, true),
            };
          }
          return null;
        });

        // Fetch data for fields with shared endpoint
        if (config.globalOptionsEndpoint) {
          const { data } = await axios.get(config.globalOptionsEndpoint);
          fetchPromises.push(
            ...config.fields.map((field) => {
              if (field.dataPath && !field.optionsEndpoint) {
                return {
                  [field.name]: formatData(data[field.dataPath]),
                };
              }
              return null;
            })
          );
        }

        const results = await Promise.all(fetchPromises);
        const newOptions = results.reduce(
          (acc, curr) => ({ ...acc, ...curr }),
          {}
        );
        setOptions(newOptions);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOptions();
  }, [config.fields, config.optionsEndpoint]);

  return (
    <div
      className='fixed inset-0 bg-slate-900 bg-opacity-25 flex justify-center items-start pt-8 overflow-y-scroll'
      onClick={toggleModal}
    >
      <div
        className='w bg-white rounded-md mx-4 shadow-xl px-4 w-2/5 mb-16'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='title px-4 py-4 border-b-[1px] border-slate-300 text-md font-medium -mx-4'>
          {config.title}
        </div>
        <div className='content px-2 pt-4'>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <form
              onSubmit={(e) =>
                onSubmit(e, config.endpoint, config.method, config)
              }
              className='space-y-2 flex flex-col flex-grow'
            >
              {config.fields.map((field) => {
                if (field.type === "select") {
                  return (
                    <FormRowMultiSelect
                      key={field.name}
                      name={field.name}
                      labelText={field.label}
                      description={field.description}
                      footerNote={field.footerNote}
                      isMult={field.isMult}
                      options={options[field.name] || []}
                    />
                  );
                }

                if (field.type === "text") {
                  return (
                    <FormRow
                      key={field.name}
                      type='text'
                      name={field.name}
                      placeholder={field.placeholder}
                      labelText={field.label}
                      description={field.description}
                    />
                  );
                }

                if (field.type === "datetime") {
                  return (
                    <FormRow
                      type='datetime-local'
                      placeholder='mm/dd/yyyy, --:-- --'
                      name={field.name}
                      labelText={field.label}
                      description={field.description}
                    />
                  );
                }
                // Handle other field types as needed
                return null;
              })}
              <div className='buttons flex items-center justify-end py-4'>
                <button
                  type='submit'
                  className='p-2 rounded-md bg-blue-400 text-white text-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700'
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
