import { useState } from "react";
import { Pencil, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const TodoList: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <ul>
      <li className="flex justify-between gap-2 rounded-md border border-gray-400/30 p-4">
        <span className="flex gap-5">
          <Checkbox onCheckedChange={() => setIsChecked(!isChecked)} />
          <Collapsible>
            <CollapsibleTrigger
              className={isChecked ? "text-gray-500 line-through" : ""}
            >
              Redux with Shadcn
            </CollapsibleTrigger>
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
