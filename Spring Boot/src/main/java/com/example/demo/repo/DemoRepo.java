package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.DmeoDto;
@Repository
public interface DemoRepo extends JpaRepository<DmeoDto, String> {
	@Query(value="select username from dmeo_dto", nativeQuery=true)
	public List<String> getDtoRepo();
	@Query(value="select case when exists(select * from dmeo_dto where username=:username and password=:password)then cast(1 as bit) else cast(0 as bit) end", nativeQuery=true)
	public Boolean getLogRepo(String username, String password);
}
