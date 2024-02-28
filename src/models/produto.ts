import Categoria from "./categoria";
interface Produto {
  id: number;
  nome: string;
  descricao: string;
  laboratorio: string;
  preco: number;
  foto: string;
  quantidade: number;
  categoria: Categoria | null;
}

export default Produto;