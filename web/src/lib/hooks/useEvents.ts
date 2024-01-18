import { useQuery } from "@tanstack/react-query";
import {
    usePocketbase
} from "../../components/PocketbaseProvider";

/**
 * Custom hook that fetches and returns the widgets for a specific slide.
 * @param slideId The ID of the slide.
 * @returns The data containing the widgets for the slide.
 */
export const useEvents = (slideId: string) => {
    const pbClient = usePocketbase(); // Get the Pocketbase client from the context.

    const data = useQuery({
        queryKey: ["slide", slideId], // Change the query key to be for events
        queryFn: async () => {
            const widgets = await pbClient
                .collection("widgets") // Pick the right database
                .getFullList({
                    filter: `slide = "${slideId}"`, // Filter the widgets to only those for the slide
                });

            return widgets;
        },
    });

    return data;
};

// 1. create table in pocketbase
// 2. Update pocketbaseProvider Event interface on line 57 to have the correct fields
// 3. update this hook to fetch data from pocketbase from the table
// 4. Change or remove filter depending on how you want to fetch the data
// 5. Update the query key to be for events
