import React from 'react';
import { usePlaymodoroContext } from '../../contexts/playmodoro';

import { Tab } from '../../components/Tab/Tab';
import {
  motion
} from "framer-motion";
import { RiFileCodeLine } from '@remixicon/react';

export const ConfigurationPanel: React.FC = () => {
    const {
      state, dispatchState,
    } = usePlaymodoroContext();


    return (
      <>
        <Tab name="playmodoro_tabs" caption="💾">
            <div className="playmodoro_panel json_panel p-4">
                <motion.button
                        className="copy_configuration_trigger"
                        // whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.7 }}
                        transition={{ duration: 0.2 }}
                    >
                    <RiFileCodeLine
                        size={50}
                        onClick={() => {
                            navigator.clipboard.writeText(JSON.stringify(state.configuration, null, 4));
                        }}
                    />
                </motion.button>
                <textarea
                    value={JSON.stringify(state.configuration, null, 4)}
                    readOnly={true}
                    style={{
                        width: '100%',
                        height: '100%',
                        fontFamily: 'monospace',
                        fontSize: '10px',
                    }}
                ></textarea>
            </div>
        </Tab>
      </>
    );
};