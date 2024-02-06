describe('Login Test', () => {
    it('User bisa login dengan kredensial yang valid', () => {
      // Kunjungi halaman login
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
  
      // Isi field email dan password
      cy.get('input[name="login[username]"]').type('penggunaakun@example.com');
      cy.get('input[name="login[password]"]').type('kataSandi123!');
  
      // Klik tombol login
      cy.get('button[name="send"]').click();
  
      // Verifikasi login berhasil
      cy.contains('Welcome,').should('exist');
    });
  });