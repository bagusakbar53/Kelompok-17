describe('Test Edit Akun', () => {
    it('User tidak bisa mengganti email atau password akun', () => {
        // Mengunjungi akun edit //
      cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
      
      //Mengisi nama penggantian
      cy.get('input[name="firstname"]').type("bagus akbar")
      cy.get('input[name="lastname"]').type("harimanto")

      // Klik tombol save
      cy.get('button[name="send"]').click();

    })

  })