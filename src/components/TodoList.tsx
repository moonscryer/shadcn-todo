import { Pencil, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const TodoList = () => {
  return (
    <ul>
      <li className="flex justify-between gap-2">
        <span className="flex gap-5">
          <Checkbox />
          <Collapsible>
            <CollapsibleTrigger>Redux with Shadcn</CollapsibleTrigger>
            <CollapsibleContent>
              Exercise from 17/03 given by David. We are committing the changes
              straight to the main branch because we like to live dangerously.
            </CollapsibleContent>
          </Collapsible>
        </span>
        <span className="flex gap-5">
          <Badge>Learning</Badge>
          <Pencil />
          <X />
        </span>
      </li>
    </ul>
  );
};
export default TodoList;
