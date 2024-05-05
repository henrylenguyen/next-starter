import { FormLogin } from "@/app/formLogin"
import { FormRegister } from "@/app/formRegister"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <Tabs defaultValue="register" className="max-w-[600px] flex-shrink-0 w-full">
        <TabsList>
          <TabsTrigger value="register">register</TabsTrigger>
          <TabsTrigger value="login">login</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <FormRegister />
        </TabsContent>
        <TabsContent value="login">
          <FormLogin />
        </TabsContent>
      </Tabs>

    </main>
  )
}
