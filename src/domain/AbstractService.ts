import { IEndPointsRepository } from 'interfaces/domain/repository';
import { IEndPointsService } from 'interfaces/domain/services/service';

export default abstract class AbstractService implements IEndPointsService {
  repository: IEndPointsRepository;

  constructor(repository: IEndPointsRepository) {
    this.repository = repository;
  }
}
