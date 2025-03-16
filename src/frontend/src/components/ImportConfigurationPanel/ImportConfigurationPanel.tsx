import React from 'react';
import { usePlaymodoroContext } from '../../contexts/playmodoro';

import { Tab } from '../../components/Tab/Tab';
import {
  motion
} from "framer-motion";
import { RiFileCodeLine } from '@remixicon/react';

export const ImportConfigurationPanel: React.FC = () => {

  const {
    state, dispatchState,
  } = usePlaymodoroContext();

  const [importedConfiguration, setImportedConfiguration] = React.useState<string>('');
  const handleImportConfiguration = () => {

    // JDLX_TODO: validate configuration

    let isJsonValid = true;
    try {
      JSON.parse(importedConfiguration)
    }
    catch (e) {
      isJsonValid = false;
      alert('Invalid JSON');
    }

    if(isJsonValid) {
      dispatchState({
        type: "SET_CONFIGURATION",
        payload: JSON.parse(importedConfiguration),
      });
    }
  };



    return (
      <>
        <Tab name="playmodoro_tabs" caption="⤵️">
            <div className="playmodoro_panel json_panel p-4">
                <motion.button
                        className="copy_configuration_trigger"
                        // whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.7 }}
                        transition={{ duration: 0.2 }}
                    >
                </motion.button>
                <textarea
                    style={{
                        width: '100%',
                        height: 'calc(100% - 50px)',
                        fontFamily: 'monospace',
                        fontSize: '10px',
                    }}
                    value={importedConfiguration}
                    onChange={(e) => {
                        setImportedConfiguration(e.target.value);
                    }}
                ></textarea>

                <button
                  className="btn btn-primary btn-md"
                  onClick={() => {
                    handleImportConfiguration();
                  }}
                >Import</button>

            </div>
        </Tab>
      </>
    );
};