describe('Pembuatan Akun Baru', () => {
  it('mendaftarkan pengguna baru', () => {
    // Mengunjungi halaman pendaftaran
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

    // Mengisi formulir pendaftaran
    cy.get('input[name="firstname"]').type('exampling');
    cy.get('input[name="lastname"]').type('code');
    cy.get('input[name="email"]').type('examplingcode@example.com');
    cy.get('input[name="password"]').type('kataSand!123');
    cy.get('input[name="password_confirmation"]').type('kataSand!123');

    // Mengklik tombol untuk membuat akun
    cy.get('button[type="submit"]').last().click({ multiple: true });

    // Verifikasi bahwa pendaftaran berhasil
    cy.contains('Thank you for registering with Main Website Store.').should('exist'); // Verifikasi teks
  });
});