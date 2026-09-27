CREATE TABLE IF NOT EXISTS emi_schedule (
    id BIGSERIAL PRIMARY KEY,
    loan_id BIGINT NOT NULL,
    installment_number INT NOT NULL,
    due_date DATE NOT NULL,
    principal_component NUMERIC(12, 2) NOT NULL,
    interest_component NUMERIC(12, 2) NOT NULL,
    emi_amount NUMERIC(12, 2) NOT NULL,
    outstanding_after NUMERIC(12, 2),
    paid_amount NUMERIC(12, 2),
    paid_date DATE,
    penal_interest NUMERIC(12, 2),
    is_paid BOOLEAN NOT NULL DEFAULT FALSE,
    is_overdue BOOLEAN NOT NULL DEFAULT FALSE,
    dpd_at_payment INT
);
