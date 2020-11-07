import React, {FC} from 'react';
import {Text} from 'ink';
import { useQuit } from "./hooks";
import { Defense, Offense } from './pktypes';

const App: FC<{primary?: string, secondary?: string}> = ({primary, secondary}) => {
    useQuit();
    console.log(Defense(primary, secondary))
    console.log(Offense(primary))

    
    return (
    <>
        <Text> Press q to quit...</Text>
    </>
)};

module.exports = App;
export default App;
