import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
    ExpandedModel,
    LayoutItem,
    Widget2,
    usePocketbase,
    StrictRecordModel,
} from "../../components/PocketbaseProvider";

/**
 * Custom hook that fetches and returns all widgets.
 * @returns The data containing the widgets.
 */

export const useWidgets = () => {
    const pbClient = usePocketbase();

    const data = useQuery({
        queryKey: ["widgets"],
        queryFn: async () => {
            const widgets = await pbClient
                .collection("widgets2")
                .getFullList();

            return widgets;
        },
    });

    return data;
};


/**
 * Custom hook for creating a new widget.
 * @returns The mutation data for creating a new widget.
 */

export const useNewWidgets = () => {
    const pbClient = usePocketbase();
    const queryClient = useQueryClient()

    const data = useMutation({
        mutationFn: async (widget: Omit<Widget2, keyof StrictRecordModel> ) => {
            const newWidget = await pbClient
                .collection("widgets2")
                .create(widget);

            return newWidget
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['widgets'] })
          console.log("success");
        },
    });
    return data;
}

/**
 * Custom hook for deleting a widget.
 * @returns The mutation data for deleting a widget.
 */

export const useDeleteWidgets = () => {
    const pbClient = usePocketbase();
    const queryClient = useQueryClient()

    const data = useMutation({
        mutationFn: async (widgetID: string) => {
            await pbClient
                .collection('widgets2')
                .delete(widgetID);
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['widgets'] })
        },
    });

    return data;
};

/**
 * Custom hook for retrieving a widget by ID.
 * @returns The mutation data for the widget.
 */

export const useRetrieveWidget = () => {
    const pbClient = usePocketbase();
    const queryClient = useQueryClient()

    const data = useMutation({
        mutationFn: async (widgetID: string) => {
            await pbClient
                .collection('widgets2')
                .getOne(widgetID);
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['widgets'] })
        },
    });

    return data;
};