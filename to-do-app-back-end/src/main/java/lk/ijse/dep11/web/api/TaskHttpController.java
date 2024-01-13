package lk.ijse.dep11.web.api;


import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import lk.ijse.dep11.web.to.TaskTo;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.sql.*;

@RestController
@RequestMapping("api/v1/tasks")
@CrossOrigin
public class TaskHttpController {

    HikariDataSource pool;
    public TaskHttpController() {
        HikariConfig config = new HikariConfig();
        config.setUsername("postgres");
        config.setPassword("sachitha18");
        config.setJdbcUrl("jdbc:postgresql://localhost:5432/dep11_todo_app");
        config.setDriverClassName("org.postgresql.Driver");
        config.addDataSourceProperty("maximumPoolSize",10);
        pool = new HikariDataSource(config);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = "application/json",consumes = "application/json")
    public TaskTo createTask(@RequestBody @Validated(TaskTo.Create.class) TaskTo task){

        try (Connection connection = pool.getConnection()) {
            PreparedStatement stm = connection
                    .prepareStatement("INSERT INTO task (description, status, email) VALUES (?, FALSE, ?)",
                            Statement.RETURN_GENERATED_KEYS);
            stm.setString(1, task.getDescription());
            stm.setString(2, task.getEmail());
            stm.executeUpdate();
            ResultSet generatedKeys = stm.getGeneratedKeys();
            generatedKeys.next();
            int id = generatedKeys.getInt(1);
            task.setId(id);
            task.setStatus(false);
            return task;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }
}
