describe('Pembuatan Akun Baru', () => {
  it('mendaftarkan pengguna baru', () => {
    // Mengunjungi halaman pendaftaran
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

    // Mengisi formulir pendaftaran
    cy.get('input[name="firstname"]').type('pengguna');
    cy.get('input[name="lastname"]').type('akun');
    cy.get('input[name="email"]').type('penggunaakun@example.com');
    cy.get('input[name="password"]').type('kataSandi123!');
    cy.get('input[name="password_confirmation"]').type('kataSandi123!');

    // Mengklik tombol untuk membuat akun
    cy.get('.form-create-account').submit();

    // Verifikasi bahwa pendaftaran berhasil
    cy.contains('Thank you for registering with Main Website Store.').should('exist'); // Verifikasi teks
  });
});