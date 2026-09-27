CREATE TABLE IF NOT EXISTS loan_groups (
    id BIGSERIAL PRIMARY KEY,
    group_code VARCHAR(30) NOT NULL UNIQUE,
    group_name VARCHAR(100) NOT NULL,
    group_type VARCHAR(20) NOT NULL,
    group_leader_id BIGINT,
    branch_id BIGINT,
    centre_name VARCHAR(100),
    meeting_day VARCHAR(100),
    meeting_time VARCHAR(10),
    meeting_venue VARCHAR(255),
    meeting_latitude DOUBLE PRECISION,
    meeting_longitude DOUBLE PRECISION,
    cohesion_score INT,
    grt_completed BOOLEAN DEFAULT FALSE,
    grt_date DATE,
    grt_remarks VARCHAR(255),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    formation_date DATE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS group_members (
    group_id BIGINT NOT NULL,
    borrower_id BIGINT NOT NULL,
    PRIMARY KEY (group_id, borrower_id)
);
