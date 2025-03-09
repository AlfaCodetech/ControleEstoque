
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
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Digite um e-mail válido.",
  }),
  password: z.string().min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }),
  confirmPassword: z.string().min(6, {
    message: "A confirmação da senha deve ter pelo menos 6 caracteres.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const UserRegistration: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Here you would typically register the user in the database
    console.log("Form submitted:", data);
    
    toast({
      title: "Conta criada com sucesso!",
      description: "Você será redirecionado para a página de login.",
    });
    
    // Simulate delay before redirecting
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 bg-card p-6 rounded-lg shadow-lg animate-fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-bold">EmbStitch<span className="font-bold text-primary">Master</span></h1>
          <h2 className="mt-6 text-3xl font-bold tracking-tight">Crie sua conta</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Preencha os campos abaixo para se registrar no sistema
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Digite seu nome completo" 
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
            
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar senha</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Confirme sua senha" 
                        type={showConfirmPassword ? "text" : "password"}
                        className="pl-10 pr-10" 
                        {...field} 
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-muted-foreground"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
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
            
            <div className="pt-2">
              <Button type="submit" className="w-full">
                Registrar
              </Button>
            </div>
            
            <div className="text-center text-sm mt-4">
              <p className="text-muted-foreground">
                Já possui uma conta?{" "}
                <Button 
                  variant="link" 
                  className="p-0 h-auto" 
                  onClick={() => navigate("/")}
                >
                  Entre aqui
                </Button>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UserRegistration;
