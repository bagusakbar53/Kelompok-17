describe('Test Edit Addres', () => {
    it('User tidak bisa mengganti alamat akun', () => {
        // Mengunjungi akun edit //
      cy.visit('https://magento.softwaretestingboard.com/customer/address/new/')
      
      //Mengisi nama penggantian
      cy.get('input[name="firstname"]').type("bagus akbar")
      cy.get('input[name="lastname"]').type("harimanto")
      cy.get('input[name="Company"').type("sanbercode")
      cy.get('input[name="Phone Number"').type("0274")

      // Klik tombol save addres
      cy.get('button[name="send"]').click();

    })

  })