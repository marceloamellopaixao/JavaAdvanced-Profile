import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">

      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>
            Make changes to your profile here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-end w-full gap-5">
          <div className="flex flex-row justify-content items-center gap-5">
            <Label htmlFor="name" className="">Name</Label>
            <Input id="name" placeholder="Email" />
          </div>
          <div className="flex flex-row justify-content items-center gap-5">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="@peduarte" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-end w-full">
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
