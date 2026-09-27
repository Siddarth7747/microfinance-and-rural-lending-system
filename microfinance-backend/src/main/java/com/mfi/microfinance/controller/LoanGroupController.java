package com.mfi.microfinance.controller;

import com.mfi.microfinance.entity.LoanGroup;
import com.mfi.microfinance.service.GrtService;
import com.mfi.microfinance.service.LoanGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/loan-groups")
@RequiredArgsConstructor
public class LoanGroupController {

    private final LoanGroupService loanGroupService;
    private final GrtService grtService;

    @GetMapping
    public ResponseEntity<List<LoanGroup>> getAllGroups() {
        return ResponseEntity.ok(loanGroupService.getAllGroups());
    }

    @PostMapping
    public ResponseEntity<LoanGroup> createGroup(@RequestBody Map<String, Object> body) {
        LoanGroup group = LoanGroup.builder()
                .groupCode((String) body.get("groupCode"))
                .groupName((String) body.get("groupName"))
                .groupType(com.mfi.microfinance.entity.enums.GroupType.valueOf((String) body.get("groupType")))
                .build();
        List<Long> memberIds = null;
        if (body.get("memberIds") != null) {
            @SuppressWarnings("unchecked")
            List<Object> raw = (List<Object>) body.get("memberIds");
            memberIds = raw.stream().map(o -> Long.valueOf(o.toString())).toList();
        }
        return ResponseEntity.ok(loanGroupService.createGroup(group, memberIds));
    }

    @GetMapping("/branch/{branchId}")
    public ResponseEntity<List<LoanGroup>> getGroupsByBranch(@PathVariable Long branchId) {
        return ResponseEntity.ok(loanGroupService.getGroupsByBranch(branchId));
    }

    @PostMapping("/{id}/grt")
    public ResponseEntity<LoanGroup> completeGrt(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(grtService.completeGrt(id, body.get("remarks")));
    }
}
