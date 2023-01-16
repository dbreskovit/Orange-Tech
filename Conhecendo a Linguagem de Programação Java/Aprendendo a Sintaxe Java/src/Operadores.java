

public class Operadores {
    public static void main(String[] args) {
        String nomeCompleto = "LINGUAGEM" + "JAVA";

        // Aritméticos
        String concatenation = "?";

        concatenation = 1 + 1 + 1 + "1";
        concatenation = 1 + "1" + 1 + 1;
        concatenation = 1 + "1" + 1 + "1";
        concatenation = "1" + 1 + 1 + 1;
        concatenation = "1" + (1 + 1 + 1);

        // Unários
        int numero = 5;

        numero = -numero;
        System.out.println(numero);

        numero = numero * -1;
        System.out.println(numero);

        // Ternário
        int a, b;

        a = 5;
        b = 6;

        String resultado = (a == b) ? "verdadeiro" : "false";
        System.out.println(resultado);

        // Relacionais

        int numero1 = 1;
        int numero2 = 2;

        if (numero1 > numero2)
            System.out.print("Numero 1 maior que numero 2");

        if (numero1 < numero2)
            System.out.print("Numero 1 menor que numero 2");

        if (numero1 >= numero2)
            System.out.print("Numero 1 maior ou igual que numero 2");

        if (numero1 <= numero2)
            System.out.print("Numero 1 menor ou igual que numero 2");

        if (numero1 != numero2)
            System.out.print("Numero 1 é diferente de numero 2");

        // Lógicos

        boolean condicao1 = true;
        boolean condicao2 = false;

        if (condicao1 && condicao2)
            System.out.print("Os dois valores precisam ser verdadeiros");

        if (condicao1 || condicao2)
            System.out.print("Um dos valores precisa ser verdadeiro");
    }
}
