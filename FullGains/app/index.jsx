import { getRoutines } from "../database/repositories/RoutineRepository"
import { Button } from "react";
import { router } from "expo-router";

export default function index() {

    const routineCheck = getRoutines();

    if (routineCheck.length === 0) {

    return (
        <>
            <Text>No tienes rutinas</Text>
            <Button/>
        </>
    );

}

return (
    router.replace("/routinesScreen1")
);
}