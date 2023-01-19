public class Fluxo {
    public static void main(String[] args) {
        ifFlecha();
        ifSemFlecha();
        ifFerias();
        switchSemana();
        switchNumero();
        switchFerias();
    }

    private static void ifFlecha() {
        int idade = 20;
        String status;

        status = idade < 18 ? "Não adulto" : "Adulto";
        System.out.println(status);
    }

    private static void ifSemFlecha() {
        int idade = 20;
        String status;

        if (idade < 18) {
            status = "Não adulto";
        } else {
            status = "Adulto";
        }
        System.out.println(status);
    }

    private static void ifFerias() {
        int mes = 1;
        String ferias;

        if (mes == 1 || mes == 2 || mes == 3) {
            ferias = "Férias de verão";
        } else if (mes == 4 || mes == 5 || mes == 6) {
            ferias = "Férias de outono";
        } else if (mes == 7 || mes == 8 || mes == 9) {
            ferias = "Férias de inverno";
        } else if (mes == 10 || mes == 11 || mes == 12) {
            ferias = "Férias de primavera";
        } else {
            ferias = "Mês inválido";
        }
    }

    private static void switchSemana() {
        int dia = 1;
        String semana;

        switch (dia) {
            case 1:
                semana = "Domingo";
                break;
            case 2:
                semana = "Segunda";
                break;
            case 3:
                semana = "Terça";
                break;
            case 4:
                semana = "Quarta";
                break;
            case 5:
                semana = "Quinta";
                break;
            case 6:
                semana = "Sexta";
                break;
            case 7:
                semana = "Sábado";
                break;
            default:
                semana = "Dia inválido";
                break;
        }
    }

    private static void switchNumero() {
        int numero = 1;
        String numeroPorExtenso;

        switch (numero) {
            case 1:
                numeroPorExtenso = "Um";
                break;
            case 2:
                numeroPorExtenso = "Dois";
                break;
            case 3:
                numeroPorExtenso = "Três";
                break;
            case 4:
                numeroPorExtenso = "Quatro";
                break;
            case 5:
                numeroPorExtenso = "Cinco";
                break;
            case 6:
                numeroPorExtenso = "Seis";
                break;
            case 7:
                numeroPorExtenso = "Sete";
                break;
            case 8:
                numeroPorExtenso = "Oito";
                break;
            case 9:
                numeroPorExtenso = "Nove";
                break;
            default:
                numeroPorExtenso = "Número inválido";
                break;
        }
    }

    private static void switchFerias() {
        int mes = 1;
        String ferias;

        switch (mes) {
            case 1:
            case 2:
            case 3:
                ferias = "Férias de verão";
                break;
            case 4:
            case 5:
            case 6:
                ferias = "Férias de outono";
                break;
            case 7:
            case 8:
            case 9:
                ferias = "Férias de inverno";
                break;
            case 10:
            case 11:
            case 12:
                ferias = "Férias de primavera";
                break;
            default:
                ferias = "Mês inválido";
                break;
        }
    }
}
