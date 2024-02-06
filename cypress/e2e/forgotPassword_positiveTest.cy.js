describe('Forgot Password Test', () => {
    it('allows a user to request a password reset', () => {
      // Kunjungi halaman login
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
  
      // Klik link "Forgot Your Password?"
      cy.contains('Forgot Your Password?').click();
  
      // Verifikasi kita berada di halaman "Forgot Your Password"
      cy.url().should('include', '/forgotpassword');
  
      // Isi formulir dengan alamat email
      cy.get('input[name="email"]').type('penggunaakun@example.com');
  
      // Submit formulir
      cy.get('button[class="action submit primary"]').click();
  
      // Verifikasi bahwa aplikasi menampilkan pesan konfirmasi atau melakukan redirect
      cy.contains('If there is an account associated with penggunaakun@example.com you will receive an email with a link to reset your password.').should('be.visible');
    });
  });