import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    ExpandedModel,
    LayoutItem,
    Slide2,
    StrictRecordModel,
    Widget2,
    usePocketbase,
} from "../../components/PocketbaseProvider";

/**
 * Custom hook for fetching slides data.
 * @returns {QueryResult} The result of the query.
 */

export const useSlides = () => {
    const pbClient = usePocketbase();

    const data = useQuery({
        queryKey: ["slides"],
        queryFn: async () => {
            const slides = await pbClient
                .collection("slides2")
                .getFullList();

            return slides;
        },
    });

    return data;
};

/**
 * Custom hook for creating a new slide.
 * @returns The mutation data for creating a new slide.
 */

export const useNewSlide = () => {
    const pbClient = usePocketbase();
    const queryClient = useQueryClient()

    const data = useMutation({
        mutationFn: async (slide: Omit<Slide2, keyof StrictRecordModel> ) => {
            const newSlide = await pbClient
                .collection("slides2")
                .create(slide);

            return newSlide;
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['slides'] })
        },
    });
    return data;
}

export const useDeleteSlide = () => {
    const pbClient = usePocketbase();
    const queryClient = useQueryClient()

    const data = useMutation({
        mutationFn: async (slideID: string) => {
            await pbClient
                .collection('slides2')
                .delete(slideID);
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['slides'] })
        },
    });

    return data;
};