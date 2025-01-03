"use client";

import { Button } from "@/components/ui/button";
import { Check, Cross } from "lucide-react";
import axios from "axios";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "./loader";

const AddButton = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desciption, setDesciption] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/shit", {
        title,
        desciption,
        link,
      });
      if (res.status !== 200) {
        toast("Shit Added successfully");
      }
    } catch (error) {
      toast("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          Add <Cross />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Want to add some random shit?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Shit"
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Describe it
            </Label>
            <Input
              id="description"
              placeholder="This shit is absolute shit"
              onChange={(e) => setDesciption(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link" className="text-right">
              Link
            </Label>
            <Input
              id="link"
              placeholder="https://shitlink.shit"
              className="col-span-3"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>
              Add Shit <Check />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
      {loading && <Loader />}
    </Dialog>
  );
};

export default AddButton;
