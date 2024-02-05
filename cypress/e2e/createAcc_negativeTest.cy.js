describe('Pembuatan Akun Baru', () => {
  it('mendaftarkan pengguna baru', () => {
    // Mengunjungi halaman pendaftaran
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

    // Mengisi formulir pendaftaran
    cy.get('input[name="firstname"]').type('exampling');
    cy.get('input[name="lastname"]').type('naming');
    cy.get('input[name="email"]').type('examplename@example.com');
    cy.get('input[name="password"]').type('cyPassword?123');
    cy.get('input[name="password_confirmation"]').type('cyPassword?123');

    // Mengklik tombol untuk membuat akun
    cy.get('button[type="submit"]').last().click({ multiple: true });

    // Verifikasi bahwa pendaftaran gagal
    //There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.
    cy.contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.').should('exist'); // Verifikasi teks
  });
});