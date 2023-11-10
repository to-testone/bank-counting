class Bank {
    constructor() {
        this.bank20 = 0;
        this.bank50 = 0;
        this.bank100 = 0;
        this.bank500 = 0;
        this.bank1000 = 0;
        this.total = 0;
        this.grandTotal = document.getElementById("grand-total");
    }

    increase(type) {
        if (type === 20) {
            this.bank20 += 1
            document.querySelector('[data-amountType="20"]').innerText = this.bank20;
            document.querySelector('[data-totalType="20"]').innerText = this.bank20*20;
            this.total += 20;
        } else if (type === 50) {
            this.bank50 += 1
            document.querySelector('[data-amountType="50"]').innerText = this.bank50;
            document.querySelector('[data-totalType="50"]').innerText = this.bank50*50;
            this.total += 50;
        } else if (type === 100) {
            this.bank100 += 1
            document.querySelector('[data-amountType="100"]').innerText = this.bank100;
            document.querySelector('[data-totalType="100"]').innerText = this.bank100*100;
            this.total += 100;
        } else if (type === 500) {
            this.bank500 += 1
            document.querySelector('[data-amountType="500"]').innerText = this.bank500;
            document.querySelector('[data-totalType="500"]').innerText = this.bank500*500;
            this.total += 500;
        } else if (type === 1000) {
            this.bank1000 += 1
            document.querySelector('[data-amountType="1000"]').innerText = this.bank1000;
            document.querySelector('[data-totalType="1000"]').innerText = this.bank1000*1000;
            this.total += 1000;
        }
        this.grandTotal.innerText = this.total;
    }

    decrease(type) {
        if (type === 20) {
            this.bank20 -= 1
            document.querySelector('[data-amountType="20"]').innerText = this.bank20;
            document.querySelector('[data-totalType="20"]').innerText = this.bank20*20;
            this.total -= 20;
        } else if (type === 50) {
            this.bank50 -= 1
            document.querySelector('[data-amountType="50"]').innerText = this.bank50;
            document.querySelector('[data-totalType="50"]').innerText = this.bank50*50;
            this.total -= 50;
        } else if (type === 100) {
            this.bank100 -= 1
            document.querySelector('[data-amountType="100"]').innerText = this.bank100;
            document.querySelector('[data-totalType="100"]').innerText = this.bank100*100;
            this.total -= 100;
        } else if (type === 500) {
            this.bank500 -= 1
            document.querySelector('[data-amountType="500"]').innerText = this.bank500;
            document.querySelector('[data-totalType="500"]').innerText = this.bank500*500;
            this.total -= 500;
        } else if (type === 1000) {
            this.bank1000 -= 1
            document.querySelector('[data-amountType="1000"]').innerText = this.bank1000;
            document.querySelector('[data-totalType="1000"]').innerText = this.bank1000*1000;
            this.total -= 1000;
        }
        this.grandTotal.innerText = this.total;
    }
}

const bank = new Bank();

document.querySelector('[data-type="20"]').onclick = () => {bank.increase(20)};
document.querySelector('[data-type="50"]').onclick = () => {bank.increase(50)};
document.querySelector('[data-type="100"]').onclick = () => {bank.increase(100)};
document.querySelector('[data-type="500"]').onclick = () => {bank.increase(500)};
document.querySelector('[data-type="1000"]').onclick = () => {bank.increase(1000)};

document.querySelector('[data-plusType="20"]').onclick = () => {bank.increase(20)};
document.querySelector('[data-plusType="50"]').onclick = () => {bank.increase(50)};
document.querySelector('[data-plusType="100"]').onclick = () => {bank.increase(100)};
document.querySelector('[data-plusType="500"]').onclick = () => {bank.increase(500)};
document.querySelector('[data-plusType="1000"]').onclick = () => {bank.increase(1000)};

document.querySelector('[data-minusType="20"]').onclick = () => {bank.decrease(20)};
document.querySelector('[data-minusType="50"]').onclick = () => {bank.decrease(50)};
document.querySelector('[data-minusType="100"]').onclick = () => {bank.decrease(100)};
document.querySelector('[data-minusType="500"]').onclick = () => {bank.decrease(500)};
document.querySelector('[data-minusType="1000"]').onclick = () => {bank.decrease(1000)};