export interface User {
  id: string;
  nome: string;
  email: string;
  senha: string;
  tipo: 'comum' | 'admin';
}
