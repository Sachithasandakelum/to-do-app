package lk.ijse.dep11.web.to;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.groups.Default;
import java.io.Serializable;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskTo implements Serializable {
    @Null(message = "Id Should be empty")
    private Integer id;
    @NotBlank(message = "Description can't be empty")
    private String description;


    @Null(message = "Status Should be empty",groups = Create.class)
    @NotNull(message="Status shouldn't be empty",groups = Update.class)
    private Boolean status;

    @NotEmpty(message = "Email cannot be empty")
    private String email;

    public interface Update extends Default {
    }

    public interface Create extends Default{
    }
}
