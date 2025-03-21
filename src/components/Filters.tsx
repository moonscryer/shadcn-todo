import { useDispatch } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { setCategoryFilter, setStatusFilter } from "@/store/filterSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    dispatch(setCategoryFilter(value)); // Dispatch filter action
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    dispatch(setStatusFilter(value)); // Dispatch filter action
  };

  return (
    <section className="flex gap-5">
      <Select
        onValueChange={handleCategoryChange}
        value={category !== "all" ? category : undefined}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by category..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="health">Health</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="learning">Learning</SelectItem>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
        </SelectContent>
      </Select>

      <Select
        onValueChange={handleStatusChange}
        value={status !== "all" ? status : undefined}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default Filters;
