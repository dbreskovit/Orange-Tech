
public class SmartTV {
    // Atributos
    private Boolean ligado;
    private Integer canal;
    private Integer volume;

    // Construtor

    public SmartTV() {
        this.setLigado(false);
        this.setCanal(0);
        this.setVolume(0);
    }

    // Métodos

    public void ligar() {
        this.setLigado(true);
        System.out.println("Ligando a TV");
    }

    public void desligar() {
        this.setLigado(false);
        System.out.println("Desligando a TV");
    }

    public void aumentarVolume() {
        this.setVolume(this.getVolume() + 1);
        System.out.println("Aumentando o volume para: " + this.getVolume());
    }

    public void diminuirVolume() {
        this.setVolume(this.getVolume() - 1);
        System.out.println("Diminuindo o volume para: " + this.getVolume());
    }

    public void trocarCanal(Integer canal) {
        this.setCanal(canal);
        System.out.println("Trocando o canal para: " + this.getCanal());
    }

    public void imprimir() {
        System.out.println("Ligado: " + this.getLigado());
        System.out.println("Canal: " + this.getCanal());
        System.out.println("Volume: " + this.getVolume());
    }

    // Getters e Setters

    public void setLigado(Boolean ligado) {
        this.ligado = ligado;
    }

    public void setCanal(Integer canal) {
        this.canal = canal;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public Boolean getLigado() {
        return ligado;
    }

    public Integer getCanal() {
        return canal;
    }

    public Integer getVolume() {
        return volume;
    }

}
