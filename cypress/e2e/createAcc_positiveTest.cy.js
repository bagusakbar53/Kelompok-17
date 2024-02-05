describe('Pembuatan Akun Baru', () => {
  it('mendaftarkan pengguna baru', () => {
    // Mengunjungi halaman pendaftaran
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

    // Mengisi formulir pendaftaran
    cy.get('input[name="firstname"]').type('exampling');
    cy.get('input[name="lastname"]').type('naming');
    cy.get('input[name="email"]').type('examplename@example.com');
    cy.get('input[name="password"]').type('Passing!123');
    cy.get('input[name="password_confirmation"]').type('Passing!123');

    // Mengklik tombol untuk membuat akun
    cy.get('button[type="submit"]').last().click({ multiple: true });

    // Verifikasi bahwa pendaftaran berhasil
    cy.contains('Thank you for registering with Main Website Store.').should('exist'); // Verifikasi teks
  });
});