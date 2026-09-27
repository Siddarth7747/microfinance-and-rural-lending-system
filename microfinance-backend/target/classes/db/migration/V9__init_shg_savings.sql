CREATE TABLE IF NOT EXISTS shg_savings (
    id BIGSERIAL PRIMARY KEY,
    group_id BIGINT NOT NULL,
    member_id BIGINT NOT NULL,
    transaction_type VARCHAR(20) NOT NULL,
    amount NUMERIC(12, 2) NOT NULL,
    transaction_date DATE NOT NULL,
    balance_after NUMERIC(12, 2),
    remarks VARCHAR(255),
    recorded_by VARCHAR(100),
    branch_id BIGINT,
    created_at TIMESTAMP
);
