describe('Pembuatan Akun Baru', () => {
  it('mendaftarkan pengguna baru', () => {
    // Mengunjungi halaman pendaftaran
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

    // Mengisi formulir pendaftaran
    cy.get('input[name="firstname"]').type('user');
    cy.get('input[name="lastname"]').type('account');
    cy.get('input[name="email"]').type('penggunaakun@example.com');
    cy.get('input[name="password"]').type('passWord!123');
    cy.get('input[name="password_confirmation"]').type('passWord!123');

    // Mengklik tombol untuk membuat akun
    cy.get('.form-create-account').submit();

    // Verifikasi bahwa pendaftaran gagal
    //There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.
    cy.contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.').should('exist'); // Verifikasi teks
  });
});