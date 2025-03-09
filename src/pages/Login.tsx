
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Digite um e-mail válido.",
  }),
  password: z.string().min(1, {
    message: "A senha é obrigatória.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Here you would typically authenticate the user
    console.log("Login form submitted:", data);
    
    toast({
      title: "Login realizado com sucesso!",
      description: "Você será redirecionado para o dashboard.",
    });
    
    // Simulate delay before redirecting
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 bg-card p-6 rounded-lg shadow-lg animate-fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-bold">EmbStitch<span className="font-bold text-primary">Master</span></h1>
          <h2 className="mt-6 text-3xl font-bold tracking-tight">Bem-vindo de volta</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre com suas credenciais para acessar o sistema
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Digite seu e-mail" 
                        type="email"
                        className="pl-10" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Digite sua senha" 
                        type={showPassword ? "text" : "password"}
                        className="pl-10 pr-10" 
                        {...field} 
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-muted-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex items-center justify-end">
              <Button 
                variant="link" 
                className="p-0 h-auto" 
                onClick={() => console.log("Esqueci minha senha")}
              >
                Esqueceu a senha?
              </Button>
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </div>
            
            <div className="text-center text-sm mt-4">
              <p className="text-muted-foreground">
                Não possui uma conta?{" "}
                <Button 
                  variant="link" 
                  className="p-0 h-auto" 
                  onClick={() => navigate("/register")}
                >
                  Registre-se aqui
                </Button>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
