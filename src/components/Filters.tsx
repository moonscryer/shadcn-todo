import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Filters = () => {
  return (
    <section className="flex gap-5">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="health">Health</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="learning">Learning</SelectItem>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};
export default Filters;
