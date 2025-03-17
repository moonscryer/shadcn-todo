import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Form = () => {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input type="text" placeholder="Add a new todo..." />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="health">Health</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="learning">Learning</SelectItem>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">+ Add</Button>
    </div>
  );
};
export default Form;
