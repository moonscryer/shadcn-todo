import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todoSlice";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleSubmit = () => {
    if (text && category) {
      dispatch(addTodo({ text, description: "", category }));
      setText(""); // Clear input field
      setCategory(""); // Reset category selection
    }
  };

  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Select onValueChange={setCategory}>
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
      <Button type="button" className="cursor-pointer" onClick={handleSubmit}>
        + Add
      </Button>
    </div>
  );
};

export default Form;
