describe('Login Test', () => {
    it('User tidak bisa login dengan password yang salah', () => {
      // Kunjungi halaman login
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
  
      // Isi field email dan password
      cy.get('input[name="login[username]"]').type('penggunaakun@example.com');
      cy.get('input[name="login[password]"]').type('ataSandi123!');
  
      // Klik tombol login
      cy.get('button[name="send"]').click();
  
      // Verifikasi login gagal
      cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('exist');
    });
  });