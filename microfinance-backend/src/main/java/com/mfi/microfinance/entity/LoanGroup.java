package com.mfi.microfinance.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mfi.microfinance.entity.enums.GroupType;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "loan_groups")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class LoanGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String groupCode;

    @Column(nullable = false, length = 100)
    private String groupName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private GroupType groupType;

    @ManyToMany
    @JoinTable(
        name = "group_members",
        joinColumns = @JoinColumn(name = "group_id"),
        inverseJoinColumns = @JoinColumn(name = "borrower_id")
    )
    @Builder.Default
    private List<Borrower> members = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_leader_id")
    private Borrower groupLeader;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    private Branch branch;

    @Column(length = 100)
    private String centreName;

    @Column(length = 100)
    private String meetingDay; // e.g., "MONDAY"

    @Column(length = 10)
    private String meetingTime; // e.g., "10:00 AM"

    @Column(length = 255)
    private String meetingVenue;

    private Double meetingLatitude;
    private Double meetingLongitude;

    private Integer cohesionScore; // 0-100

    @Builder.Default
    private Boolean grtCompleted = false;
    private LocalDate grtDate;

    @Column(length = 255)
    private String grtRemarks;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isActive = true;

    private LocalDate formationDate;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getGroupCode() { return groupCode; }
    public void setGroupCode(String groupCode) { this.groupCode = groupCode; }

    public String getGroupName() { return groupName; }
    public void setGroupName(String groupName) { this.groupName = groupName; }

    public GroupType getGroupType() { return groupType; }
    public void setGroupType(GroupType groupType) { this.groupType = groupType; }

    public List<Borrower> getMembers() { return members; }
    public void setMembers(List<Borrower> members) { this.members = members; }

    public Borrower getGroupLeader() { return groupLeader; }
    public void setGroupLeader(Borrower groupLeader) { this.groupLeader = groupLeader; }

    public Branch getBranch() { return branch; }
    public void setBranch(Branch branch) { this.branch = branch; }

    public String getCentreName() { return centreName; }
    public void setCentreName(String centreName) { this.centreName = centreName; }

    public String getMeetingDay() { return meetingDay; }
    public void setMeetingDay(String meetingDay) { this.meetingDay = meetingDay; }

    public String getMeetingTime() { return meetingTime; }
    public void setMeetingTime(String meetingTime) { this.meetingTime = meetingTime; }

    public String getMeetingVenue() { return meetingVenue; }
    public void setMeetingVenue(String meetingVenue) { this.meetingVenue = meetingVenue; }

    public Double getMeetingLatitude() { return meetingLatitude; }
    public void setMeetingLatitude(Double meetingLatitude) { this.meetingLatitude = meetingLatitude; }

    public Double getMeetingLongitude() { return meetingLongitude; }
    public void setMeetingLongitude(Double meetingLongitude) { this.meetingLongitude = meetingLongitude; }

    public Integer getCohesionScore() { return cohesionScore; }
    public void setCohesionScore(Integer cohesionScore) { this.cohesionScore = cohesionScore; }

    public Boolean getGrtCompleted() { return grtCompleted; }
    public void setGrtCompleted(Boolean grtCompleted) { this.grtCompleted = grtCompleted; }

    public LocalDate getGrtDate() { return grtDate; }
    public void setGrtDate(LocalDate grtDate) { this.grtDate = grtDate; }

    public String getGrtRemarks() { return grtRemarks; }
    public void setGrtRemarks(String grtRemarks) { this.grtRemarks = grtRemarks; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public LocalDate getFormationDate() { return formationDate; }
    public void setFormationDate(LocalDate formationDate) { this.formationDate = formationDate; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public static LoanGroupBuilder builder() { return new LoanGroupBuilder(); }

    public static class LoanGroupBuilder {
        private Long id;
        private String groupCode;
        private String groupName;
        private GroupType groupType;
        private List<Borrower> members = new ArrayList<>();
        private Borrower groupLeader;
        private Branch branch;
        private String centreName;
        private String meetingDay;
        private String meetingTime;
        private String meetingVenue;
        private Double meetingLatitude;
        private Double meetingLongitude;
        private Integer cohesionScore;
        private Boolean grtCompleted = false;
        private LocalDate grtDate;
        private String grtRemarks;
        private Boolean isActive = true;
        private LocalDate formationDate;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        public LoanGroupBuilder id(Long id) { this.id = id; return this; }
        public LoanGroupBuilder groupCode(String groupCode) { this.groupCode = groupCode; return this; }
        public LoanGroupBuilder groupName(String groupName) { this.groupName = groupName; return this; }
        public LoanGroupBuilder groupType(GroupType groupType) { this.groupType = groupType; return this; }
        public LoanGroupBuilder members(List<Borrower> members) { this.members = members; return this; }
        public LoanGroupBuilder groupLeader(Borrower groupLeader) { this.groupLeader = groupLeader; return this; }
        public LoanGroupBuilder branch(Branch branch) { this.branch = branch; return this; }
        public LoanGroupBuilder centreName(String centreName) { this.centreName = centreName; return this; }
        public LoanGroupBuilder meetingDay(String meetingDay) { this.meetingDay = meetingDay; return this; }
        public LoanGroupBuilder meetingTime(String meetingTime) { this.meetingTime = meetingTime; return this; }
        public LoanGroupBuilder meetingVenue(String meetingVenue) { this.meetingVenue = meetingVenue; return this; }
        public LoanGroupBuilder meetingLatitude(Double meetingLatitude) { this.meetingLatitude = meetingLatitude; return this; }
        public LoanGroupBuilder meetingLongitude(Double meetingLongitude) { this.meetingLongitude = meetingLongitude; return this; }
        public LoanGroupBuilder cohesionScore(Integer cohesionScore) { this.cohesionScore = cohesionScore; return this; }
        public LoanGroupBuilder grtCompleted(Boolean grtCompleted) { this.grtCompleted = grtCompleted; return this; }
        public LoanGroupBuilder grtDate(LocalDate grtDate) { this.grtDate = grtDate; return this; }
        public LoanGroupBuilder grtRemarks(String grtRemarks) { this.grtRemarks = grtRemarks; return this; }
        public LoanGroupBuilder isActive(Boolean isActive) { this.isActive = isActive; return this; }
        public LoanGroupBuilder formationDate(LocalDate formationDate) { this.formationDate = formationDate; return this; }
        public LoanGroupBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }
        public LoanGroupBuilder updatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; return this; }

        public LoanGroup build() {
            LoanGroup g = new LoanGroup();
            g.id = this.id;
            g.groupCode = this.groupCode;
            g.groupName = this.groupName;
            g.groupType = this.groupType;
            g.members = this.members;
            g.groupLeader = this.groupLeader;
            g.branch = this.branch;
            g.centreName = this.centreName;
            g.meetingDay = this.meetingDay;
            g.meetingTime = this.meetingTime;
            g.meetingVenue = this.meetingVenue;
            g.meetingLatitude = this.meetingLatitude;
            g.meetingLongitude = this.meetingLongitude;
            g.cohesionScore = this.cohesionScore;
            g.grtCompleted = this.grtCompleted;
            g.grtDate = this.grtDate;
            g.grtRemarks = this.grtRemarks;
            g.isActive = this.isActive;
            g.formationDate = this.formationDate;
            g.createdAt = this.createdAt;
            g.updatedAt = this.updatedAt;
            return g;
        }
    }
}


