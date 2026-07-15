import { Stack } from "expo-router";
import { useEffect } from "react";

import initDatabase from "../database/initDatabase";

export default function Layout() {

    useEffect(() => {

        initDatabase();

    }, []);

    return (

        <Stack
            screenOptions={{
                headerShown: false
            }}
        />

    );

}