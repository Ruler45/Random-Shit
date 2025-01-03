import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const random = [
  {
    title: "This is shit is very very very very very very very very long",
    id: "bbebu8547384xsbhbs",
    content: "I found it absolutely useless ",
  },
  {
    title: "This is shit",
    id: "fcdfvbbv",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "euhfbebuvgnd",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "fehufiw;ojf",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "fygeiydbfuen",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit ",
    id: "ghbiBEOfjd",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "fhiidbvjd",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "fhdchvbuf",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "ckhbidxcbsio",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "vhdiubduc",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "vdbufbdcodvj",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "vfblbvdou",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "cbdvudbv",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "c9dhfuhe",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "vfjjvbjhfbvj;",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "bhcdyvidbhi",
    content: "I found it absolutely useless",
  },
  {
    title: "This is shit",
    id: "ybcbdihybcd",
    content: "I found it absolutely useless",
  },
];
const RandomShit = () => {
  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-4">
      {random.map((item) => {
        return (
          <Card id={item.id} className=" max-w-[30vw] text-gray-300" key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Check out </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default RandomShit;
