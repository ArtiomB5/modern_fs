import { useAddBlockingItemMutation } from "@/4_entities/block-list"
import { useForm } from "react-hook-form";

export const useBlockItemForm = () => {
    const {handleSubmit} = useForm();
    const addBlockItemMutation = useAddBlockingItemMutation();

    return {
        handleSubmit
    }
}