import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isEditing } = useMutation({
    mutationFn: ({ newCabinDatam, id }) => createEditCabin(newCabinDatam, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isEditing, editCabin };
}
