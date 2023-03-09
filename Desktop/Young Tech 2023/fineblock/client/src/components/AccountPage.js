import React from 'react';

function AccountPage() {
    return (
        <div>
            <div>
                <h2>Informations personnelles</h2>
                <form>
                    <label htmlFor="firstName">Prénom:</label>
                    <input type="text" id="firstName" name="firstName" /><br /><br />

                    <label htmlFor="lastName">Nom:</label>
                    <input type="text" id="lastName" name="lastName" /><br /><br />

                    <label htmlFor="address">Adresse:</label>
                    <input type="text" id="address" name="address" /><br /><br />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" /><br /><br />
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Mise à jour des informations bancaires </button>
                </form>
            </div>
            <div>
                <h2>Paramètres du compte</h2>
                <p>Abonnement mensuel: $9.99</p>
                <p>Prochaine date de facturation: 1er avril 2023</p>
            </div>
            <div>
                <h2>Informations de la carte</h2>
                <form>
                    <label htmlFor="cardNumber">Numéro de carte:</label>
                    <input type="text" id="cardNumber" name="cardNumber" /><br /><br />

                    <label htmlFor="expirationDate">Expiration (MM/YY):</label>
                    <input type="text" id="expirationDate" name="expirationDate" /><br /><br />

                    <label htmlFor="cvc">CVC:</label>
                    <input type="text" id="cvc" name="cvc" /><br /><br />

                    <button type="submit">Mettre à jour</button>
                </form>
            </div>
        </div>
    );
}

export default AccountPage;
