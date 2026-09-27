package com.mfi.microfinance.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiErrorResponse {
    private String type;
    private String title;
    private int status;
    private String detail;
    private String instance;
    private LocalDateTime timestamp;
    private Map<String, String> fieldErrors;
    private List<String> errors;

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public int getStatus() { return status; }
    public void setStatus(int status) { this.status = status; }

    public String getDetail() { return detail; }
    public void setDetail(String detail) { this.detail = detail; }

    public String getInstance() { return instance; }
    public void setInstance(String instance) { this.instance = instance; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

    public Map<String, String> getFieldErrors() { return fieldErrors; }
    public void setFieldErrors(Map<String, String> fieldErrors) { this.fieldErrors = fieldErrors; }

    public List<String> getErrors() { return errors; }
    public void setErrors(List<String> errors) { this.errors = errors; }

    public static ApiErrorResponseBuilder builder() { return new ApiErrorResponseBuilder(); }

    public static class ApiErrorResponseBuilder {
        private String type;
        private String title;
        private int status;
        private String detail;
        private String instance;
        private LocalDateTime timestamp;
        private Map<String, String> fieldErrors;
        private List<String> errors;

        public ApiErrorResponseBuilder type(String type) { this.type = type; return this; }
        public ApiErrorResponseBuilder title(String title) { this.title = title; return this; }
        public ApiErrorResponseBuilder status(int status) { this.status = status; return this; }
        public ApiErrorResponseBuilder detail(String detail) { this.detail = detail; return this; }
        public ApiErrorResponseBuilder instance(String instance) { this.instance = instance; return this; }
        public ApiErrorResponseBuilder timestamp(LocalDateTime timestamp) { this.timestamp = timestamp; return this; }
        public ApiErrorResponseBuilder fieldErrors(Map<String, String> fieldErrors) { this.fieldErrors = fieldErrors; return this; }
        public ApiErrorResponseBuilder errors(List<String> errors) { this.errors = errors; return this; }

        public ApiErrorResponse build() {
            ApiErrorResponse r = new ApiErrorResponse();
            r.type = this.type;
            r.title = this.title;
            r.status = this.status;
            r.detail = this.detail;
            r.instance = this.instance;
            r.timestamp = this.timestamp;
            r.fieldErrors = this.fieldErrors;
            r.errors = this.errors;
            return r;
        }
    }
}


