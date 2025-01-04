import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RandomShit = ({ random }) => {
  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-4">
      {random.map((item) => {
        return (
          <Card
            id={item._id}
            className=" max-w-[30vw] text-gray-300"
            key={item._id}
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
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
