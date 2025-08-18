import { useState } from "react";
import '../styles/global.css';
import { Button } from "./ui/button";

export default function About() {

 const [count, setCount] = useState(0);
 



  return (
    <div className="justify-center align-middle items-center flex">
      <div>
        <Button className="hover:cursor-pointer" onClick={() =>setCount(count+1)}>Press Here:</Button>
      </div>
      <div>{count}</div>
    </div>
  )
}
